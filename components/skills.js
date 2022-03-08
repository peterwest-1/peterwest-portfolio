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

//TODO: - Fix keys asap lmao
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
            <DiSwift
              size={size}
              key={"ef6cdd64-62d2-4e01-97dd-02a8ebbfeb6b"}
            />,
            <DiUikit
              size={size}
              key={"a3e1286f-0ae6-4ebb-96f7-5c26c9ae5d01"}
            />,
            <DiMongodb
              size={size}
              key={"41b82c88-ffe8-43ce-b8ad-ba985056f0cb"}
            />,
            <DiFirebase
              size={size}
              key={"b14e7bca-73a9-4910-81f6-2e2756ef9c85"}
            />,
            <DiHeroku
              size={size}
              key={"67e48c50-c343-4429-9bee-77a95c04c7e3"}
            />,
            <DiAppstore
              size={size}
              key={"3d9cfe40-d9ae-4bc1-bb7b-b2ca61c9dc70"}
            />,
          ]}
          tools={[
            <SiXcode
              size={sizeSmall}
              key={"3b2ada39-96b4-4cd1-b151-850a08fa9ec2"}
            />,
            <DiGit
              size={sizeSmall}
              key={"63b1bba0-1a25-43ae-a8e7-d82166b5fd0d"}
            />,
            <BsGithub
              size={sizeSmall}
              key={"da229c20-0681-400a-a1f9-92e258a4889e"}
            />,
            <DiTerminal
              size={sizeSmall}
              key={"01a5b0fb-2775-4cf8-8435-119002ba4b49"}
            />,
          ]}
          path="/skills/mobile"
        />
        <SkillsPreview
          title={"Front End"}
          skills={[
            <DiJsBadge
              size={size}
              key={"1681af71-f0cc-4079-9bc9-8874cef724bb"}
            />,
            <DiReact
              size={size}
              key={"782ec0cf-95ca-4845-82c7-a3a1f669e02e"}
            />,
            <SiNextdotjs
              size={size}
              key={"1f8bd6c4-e732-442f-898e-d71a21a7476e"}
            />,
            <DiRedis
              size={size}
              key={"e9306285-565c-4b81-ad48-d8bf585cdff7"}
            />,
            <DiHtml5
              size={size}
              key={"cea15ab0-7d76-4d4f-866f-dade6012c69b"}
            />,
            <DiCss3 size={size} key={"1ce0041c-4cd2-46dc-aa85-0eaf201661c6"} />,
          ]}
          tools={[
            <SiVisualstudiocode
              size={sizeSmall}
              key={"425cd66e-a811-4cca-b0b8-203cfb4383d8"}
            />,
            <DiGit
              size={sizeSmall}
              key={"de3e998f-1e96-4746-a678-4f389baa3afc"}
            />,
            <BsGithub
              size={sizeSmall}
              key={"d028d719-b727-4983-8bd7-cd6759b966be"}
            />,
            <DiTerminal
              size={sizeSmall}
              key={"2b2734f6-d82d-4cde-8b09-105fc5c87eb7"}
            />,
          ]}
          path="/skills/frontend"
        />
        <SkillsPreview
          title={"Back End"}
          skills={[
            <DiNodejs
              size={size}
              key={"cdf218ba-4dd2-4004-b757-245ee98a6090"}
            />,
            <DiPostgresql
              size={size}
              key={"1434695e-b17f-46fc-bbec-39f1157cf843"}
            />,
            <GrGraphQl
              size={size}
              key={"67891716-95c0-4e6f-8b19-a79594e7af1b"}
            />,
          ]}
          tools={[
            <SiVisualstudiocode
              size={sizeSmall}
              key={"7c226220-8912-43c7-ab10-0a462a955f41"}
            />,
            <DiGit
              size={sizeSmall}
              key={"1bb83fba-e2ae-4f71-bc8d-3cdcf1cb2ebf"}
            />,
            <BsGithub
              size={sizeSmall}
              key={"60612681-2574-45e7-b387-a5bee61c768b"}
            />,
            <DiTerminal
              size={sizeSmall}
              key={"c2135b8a-7386-4ca3-a90d-db73692643e7"}
            />,
          ]}
          path="/skills/backend"
        />
      </div>
    </section>
  );
}
