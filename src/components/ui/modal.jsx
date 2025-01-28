import Image from 'next/image';

export function Modal({ show, onClick, brand, img, objective, location, duration, outcome }) {
  return (
    show && (
      <div className="fixed inset-0 left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50" onClick={onClick}>
        <div className="max-w-3xl flex-none bg-white px-5 py-3 shadow-md max-sm:max-w-full">
          <div className="flex w-full max-md:flex-col">
            <Image src={img} className="aspect-square grow w-full max-w-sm object-contain max-sm:aspect-video" alt="case study" width={400} height={300} />
            <div className="flex flex-col gap-1 p-4 grow w-full">
              <h3 className="max-md:text-md text-xl font-bold">{brand}</h3>
              <h4 className="text-sm/snug">{objective}</h4>
              {location && (
                <p className="text-sm text-gray-700">
                  <b>Location : </b>
                  {location}
                </p>
              )}
              {duration && (
                <p className="text-sm text-gray-700">
                  <b>Duration : </b>
                  {duration}
                </p>
              )}
              {outcome.length > 0 && (
                <>
                  <p className="text-sm font-semibold text-gray-700">Outcome :</p>
                  <ul className="pl-3 list-disc">
                    {outcome.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
