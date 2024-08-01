import IconCloud from "./IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function IconCloudComponent() {
  return (
    <div className="relative flex md:h-full w-full items-center justify-center overflow-hidden rounded-full px-14 pb-14 pt-5 md:px-20 md:pb-20 md:pt-8 xl:ml-28 xl:pt-0">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
