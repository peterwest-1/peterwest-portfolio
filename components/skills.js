import {
  DiAppstore,
  DiCss3,
  DiFirebase,
  DiHeroku,
  DiHtml5,
  DiJsBadge,
  DiMongodb,
  DiNodejs,
  DiPostgresql,
  DiReact,
  DiRedis,
  DiSwift,
  DiUikit,
  DiGit,
  DiTerminal,
} from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import SkillsPreview from "./skills-preview";
import { SiNextdotjs, SiVisualstudiocode, SiXcode } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

export default function Skills() {
  const size = "3rem";
  const sizeSmall = "2rem";
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Skills
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-3 md:gap-x-4 lg:gap-x-8 gap-y-20 md:gap-y-32 mb-32">
        <SkillsPreview
          title={"Mobile"}
          skills={[
            <DiSwift size={size} />,
            <DiUikit size={size} />,
            <DiMongodb size={size} />,
            <DiFirebase size={size} />,
            <DiHeroku size={size} />,
            <DiAppstore size={size} />,
          ]}
          tools={[
            <SiXcode size={sizeSmall} />,
            <DiGit size={sizeSmall} />,
            <BsGithub size={sizeSmall} />,
            <DiTerminal size={sizeSmall} />,
          ]}
          path="/skills/mobile"
        />
        <SkillsPreview
          title={"Front End"}
          skills={[
            <DiJsBadge size={size} />,
            <DiReact size={size} />,
            <SiNextdotjs size={size} />,
            <DiRedis size={size} />,
            <DiHtml5 size={size} />,
            <DiCss3 size={size} />,
          ]}
          tools={[
            <SiVisualstudiocode size={sizeSmall} />,
            <DiGit size={sizeSmall} />,
            <BsGithub size={sizeSmall} />,
            <DiTerminal size={sizeSmall} />,
          ]}
          path="/skills/frontend"
        />
        <SkillsPreview
          title={"Back End"}
          skills={[
            <DiNodejs size={size} />,
            <DiPostgresql size={size} />,
            <GrGraphQl size={size} />,
          ]}
          tools={[
            <SiVisualstudiocode size={sizeSmall} />,
            <DiGit size={sizeSmall} />,
            <BsGithub size={sizeSmall} />,
            <DiTerminal size={sizeSmall} />,
          ]}
          path="/skills/backend"
        />
      </div>
    </section>
  );
}
