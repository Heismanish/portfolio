import { useState, useEffect } from "react";

// Move gql function outside the component
async function gql(query, variables = {}) {
  try {
    const data = await fetch("https://api.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    const result = await data.json();
    if (result.errors) {
      console.error("GraphQL Error:", result.errors);
    }
    return result;
  } catch (error) {
    console.error("Fetch Error:", error);
  }
}

export default function Blogs() {
  const [blogData, setBlogData] = useState([]);

  const GET_USER_ARTICLES = `
  query GetUserArticles($page: Int!) {
    user(username: "Heismanish") {
      publication {
        posts(page: $page) {
          title
          brief
          slug
        }
      }
    }
  }
`;

  useEffect(() => {
    gql(GET_USER_ARTICLES, { page: 0, limit: 4 }).then((result) => {
      const articles = result.data.user.publication.posts;
      setBlogData(articles);
      console.log("Fetched Blog Data:", articles);
    });
  }, []);

  return (
    <div
      id="blog"
      className="md:mb-0 mb-16 container mt-2 md:mt-4  h-auto max-w-[80%] mx-auto  dark:bg-gray-900 text-center "
    >
      <h3 className="text-4xl mb-8  lg:text-4xl   font-semibold  text-gray-700 dark:text-gray-300 text-center">
        Blogs
      </h3>
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-project-layout grid-rows-project-row  gap-x-2 gap-y-3  place-content-center 	 ">
        {blogData.length > 0 ? (
          blogData.map((data) => (
            <div
              key={data.slug}
              className="max-w-sm p-6 justify-self-center self-center  h-full w-full flex flex-col justify-center gap-y-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-ellipsis  ">
                {data.brief}
              </p>
              <a
                rel="noreferrer"
                target="_blank"
                href={`https://Heismanish.hashnode.dev//${data.slug}`}
                className="text-gray-900 transition ease-out duration-300 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg py-3 px-2  mb-2 text-lg  dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2 inline-block"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          ))
        ) : (
          <p className="text-3xl text-gray-500 font-medium">Loading...</p>
        )}
      </div>
    </div>
  );
}
