import { useImageContext } from "@/Context";
import { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const ImagePopup = ({ imageId, handleModal, showModal, imageUrl, user }) => {
  const { getImageData } = useImageContext();
  const [image, setImage] = useState();

  const getData = async () => {
    try {
      const data = await getImageData(imageId);
      setImage(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Modal
      open={showModal}
      onClose={handleModal}
      aria-labelledby={image?.slug}
      classNames={{ modal: "p-0 m-0 w-full" }}
    >
      <div className="relative flex flex-col w-full bg-gray-50 dark:bg-gray-950   text-gray-950 dark:text-gray-50">
        <div className="relative grid items-center ">
          <img
            src={imageUrl}
            alt=""
            className="object-contain w-full   max-h-screen"
          />
          <InfoButtons />
        </div>

        <div className="bg-gray-50 dark:bg-gray-950 p-5 gap-3 flex flex-col">
          <div className="flex items-center justify-betweend  ">
            <div className="flex flex-col gap-2 flex-wrap">
              <UserInfo user={user} />
              <ul className="flex gap-2">
                {user?.social?.instagram_username && (
                  <Social
                    icon="instagram"
                    username={user?.social?.instagram_username}
                  />
                )}
                {user?.social?.twitter_username && (
                  <Social
                    icon="twitter"
                    username={user?.social?.twitter_username}
                  />
                )}
              </ul>
            </div>

            <ActionButtons
              imageUrl={imageUrl}
              slug={image?.slug}
              likes={image?.likes}
              downloads={image?.download}
            />
          </div>
          <div className="">
            <h5 className="font-bold text-gray-950 dark:text-gray-50 py-5">
              Related Tags
            </h5>
            <ul className="flex flex-wrap gap-2">
              {image?.tags.map((tag, i) => (
                <li
                  className="bg-gray-100 py-1 rounded px-5 text-gray-950 dark:text-gray-50 dark:bg-gray-700"
                  key={i}
                >
                  {tag.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const InfoButtons = () => (
  <div className="absolute bottom-0 flex justify-between p-1 ml-auto  w-full gap-2   ">
    <Button variant="outline" className=" flex items-center gap-1 ">
      Share
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
        />
      </svg>
    </Button>
    <Button variant="outline" className="flex items-center gap-1">
      Info
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    </Button>
  </div>
);

const UserInfo = ({ user }) => (
  <div className="flex items-center gap-2 text-gray-950 dark:text-gray-50">
    <Avatar className="rounded-full">
      <AvatarImage className="rounded-full" src={user?.profile_image?.small} />
      <AvatarFallback className="rounded-full">{user?.username}</AvatarFallback>
    </Avatar>
    <div className="flex  flex-col gap-0 text-left">
      <h5 className=" whitespace-normal font-bold">
        {user?.first_name} {user?.last_name === null ? "" : user?.last_name}
      </h5>
      <h6 className="text-sm text-gray-500">@{user?.username}</h6>
    </div>
  </div>
);

const Social = ({ username, icon }) => (
  <li>
    <a
      className="flex items-center text-sm  text-gray-950 dark:text-gray-50"
      href={
        icon === "instagram"
          ? `https://www.instagram.com/${username}`
          : `https://twitter.com/${username}`
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon === "instagram" ? icons[0] : icons[1]}/{username}
    </a>
  </li>
);

const icons = [
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_47_131)">
      <path
        d="M10.625 1.25H4.375C2.64911 1.25 1.25 2.64911 1.25 4.375V10.625C1.25 12.3509 2.64911 13.75 4.375 13.75H10.625C12.3509 13.75 13.75 12.3509 13.75 10.625V4.375C13.75 2.64911 12.3509 1.25 10.625 1.25Z"
        stroke="#A7A7A7"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0001 7.10625C10.0772 7.6264 9.98835 8.15763 9.74616 8.62438C9.50397 9.09113 9.12078 9.46963 8.65108 9.70604C8.18138 9.94246 7.64909 10.0247 7.12993 9.94121C6.61076 9.85767 6.13116 9.61255 5.75934 9.24072C5.38751 8.8689 5.14239 8.38929 5.05885 7.87013C4.97531 7.35097 5.0576 6.81868 5.29402 6.34898C5.53043 5.87928 5.90893 5.49609 6.37568 5.2539C6.84243 5.01171 7.37366 4.92287 7.89381 5C8.42439 5.07868 8.91559 5.32591 9.29487 5.70519C9.67415 6.08447 9.92138 6.57567 10.0001 7.10625Z"
        stroke="#A7A7A7"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9375 4.0625H10.9438"
        stroke="#A7A7A7"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_47_131">
        <rect width="15" height="15" fill="white" />
      </clipPath>
    </defs>
  </svg>,
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4163 1.75C12.8577 2.14403 12.2392 2.4454 11.5847 2.6425C11.2334 2.23855 10.7665 1.95224 10.2471 1.82229C9.72777 1.69234 9.18105 1.72503 8.68089 1.91593C8.18073 2.10683 7.75127 2.44673 7.45058 2.88967C7.1499 3.3326 6.9925 3.85719 6.99967 4.3925V4.97583C5.97454 5.00241 4.95875 4.77506 4.04276 4.31401C3.12678 3.85296 2.33903 3.17254 1.74967 2.33333C1.74967 2.33333 -0.583659 7.58333 4.66634 9.91667C3.46498 10.7321 2.03385 11.141 0.583008 11.0833C5.83301 14 12.2497 11.0833 12.2497 4.375C12.2491 4.21251 12.2335 4.05043 12.203 3.89083C12.7984 3.3037 13.2185 2.56241 13.4163 1.75V1.75Z"
      stroke="#A7A7A7"
      strokeWidth="1.16667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
];

const ActionButtons = ({ slug, imageUrl, downloads, likes }) => (
  <div className="flex gap-2 ml-auto">
    <Button className="flex gap-1 ml-auto items-center">
      <a
        href={imageUrl}
        target="_blank"
        download={slug}
        className="flex gap-1 ml-auto items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
        Downlaods
        <span className="font-semibold">{downloads}</span>
      </a>
    </Button>
    <Button
      variant="outline"
      className="flex gap-1 text-gray-950 dark:text-gray-50  "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
        />
      </svg>
      <span className="font-semibold">{likes}</span>
    </Button>
  </div>
);

export default ImagePopup;
