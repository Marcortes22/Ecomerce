import { useEffect, useState } from "react";

export default function Gallery({ images }: { images: Array<string> }) {
  const [current, setCurrent] = useState(images[0]);
  const [secondary, setSecondary] = useState<string[]>([]);

  useEffect(() => {
    const secondaryPhotos = images.filter((item) => item != current);
    setSecondary(secondaryPhotos);
  }, [current]);

  function handleClick(newCurrent: string) {
    setCurrent(newCurrent);
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <img
            className="h-auto max-w-[350px] md:max-w-[400px] rounded-lg"
            src={current}
            alt=""
          />
        </div>

        <div className="flex justify-center   gap-4">
          {secondary?.map((item, id) => (
            <div key={id}>
              <img
                onClick={() => handleClick(item)}
                className="h-auto max-w-[100px] rounded-lg cursor-pointer"
                src={item}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
