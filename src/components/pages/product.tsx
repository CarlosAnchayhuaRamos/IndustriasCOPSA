interface articleProps {
  title: string;
  description: string;
  image: string;
  url: string;
  index: number;
}

function article(data: articleProps) {
  const { title, description, image, index } = data;

  const isEven = index % 2 === 0; // Si es par (0, 2, 4...)

  return (
    <div className="lg:max-w-2/7 border border-[#00A651] rounded-lg shadow-sm bg-[#F5F5F5] my-3">
      <div className="overflow-hidden rounded-t-lg w-full">
        <img
          className="w-full rounded-t-lg"
          src={image}
          alt={title}
          style={{
            width: "190%",
            maxWidth: "none",
            transform: isEven ? "translateX()" : "translateX(-46%)",
          }}
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#4A2E1D]">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default article;
