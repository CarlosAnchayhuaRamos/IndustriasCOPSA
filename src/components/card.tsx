interface articleProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

function article(data: articleProps) {
  const { title, description, image, url } = data;

  return (
    <div className="lg:max-w-2/5 border border-[#00A651] rounded-lg shadow-sm bg-[#F5F5F5] my-3">
      <a href={url}>
        <img
          className="rounded-t-lg w-full rounded-2xl"
          src={image}
          alt={title}
        />
      </a>
      <div className="p-5">
        <a href={url} target="_blank">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#4A2E1D]">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href={url}
          target="_blank"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#00A651] hover:bg-[#66BB6A] rounded-lg focus:ring-4 focus:outline-none"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default article;
