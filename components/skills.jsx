import SkillsMobile from "./skills-mobile";
import SkillsFrontend from "./skills-frontend";
import SkillsBackend from "./skills-backend";

//TODO: - Fix keys asap lmao
export default function Skills() {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Skills &gt; <a className="text-gray-500  font-normal ">Development &amp; Design</a>
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-3 md:gap-x-4 lg:gap-x-8 gap-y-20 md:gap-y-32 mb-32">
        <SkillsMobile />
        <SkillsFrontend />
        <SkillsBackend />
      </div>
    </section>
  );
}
