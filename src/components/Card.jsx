/* eslint-disable react/prop-types */
import { formatDistanceToNow } from "date-fns";
import "../styles/globals.css";
export default function Card(props) {
  const { repo } = props;

  const timeAgo = formatDistanceToNow(repo?.updated_at ? repo?.updated_at : 0, {
    addSuffix: true,
  });

  return (
    <a
      href={repo?.html_url}
      target="_blank"
      className="h-36 w-[49%] rounded-2xl px-5 flex flex-col justify-around gradient-hover
             max-[640px]:w-full max-[640px]:h-auto max-[640px]:py-4 max-[640px]:flex max-[640px]:flex-col max-[640px]:items-start max-[640px]:justify-around"
    >
      <h1 className="text-textWhite font-beVietnamPro font-boldmax-[640px]:text-[12px] max-[640px]:py-1">
        {repo?.name}
      </h1>
      <p className="text-placeholder font-beVietnamPro font-medium text-sm max-[640px]:text-[12px] max-[640px]:py-2">
        {repo?.description == null ? "No description" : repo?.description}
      </p>
      <div className="flex items-center mr-2">
        <div className="flex items-center max-[640px]:py-1">
          <img src="/Nesting.svg" alt={"Nesting"} className="w-6 h-6" />
          <h3 className="text-placeholder text-md ml-1 mr-2 max-[640px]:text-[12px]">
            {repo?.forks_count}
          </h3>
        </div>
        <div className="flex items-center">
          <img src="/Star.svg" alt={"Star"} className="w-6 h-6" />
          <h3 className="text-placeholder text-md ml-1 mr-2 max-[640px]:text-[12px]">
            {repo?.stargazers_count}
          </h3>
        </div>
        <p className="text-placeholder font-bold text-sm max-[640px]:text-[12px]">
          updated {timeAgo}
        </p>
      </div>
    </a>
  );
}
