import { Skill } from "./Skill";

export const SkillGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      <Skill name="Photography" description="I have been taking photos for almost decade, and I have a lot of skills in this sphere" percentage={45} color="sky" />
      <Skill name="Photography" description="I have been taking photos for almost decade, and I have a lot of skills in this sphere" percentage={66} color="red" />
      <Skill name="Photography" description="I have been taking photos for almost decade, and I have a lot of skills in this sphere" percentage={34} color="purple" />
      <Skill name="Photography" description="I have been taking photos for almost decade, and I have a lot of skills in this sphere" percentage={45} color="sky" />
      <Skill name="Photography" description="I have been taking photos for almost decade, and I have a lot of skills in this sphere" percentage={66} color="red" />
      <Skill name="Photography" description="I have been taking photos for almost decade, and I have a lot of skills in this sphere" percentage={34} color="purple" />
      <Skill name="Photography" description="I have been taking photos for almost decade, and I have a lot of skills in this sphere" percentage={45} color="sky" />
      <Skill name="Photography" description="I have been taking photos for almost decade, and I have a lot of skills in this sphere" percentage={66} color="red" />
      <Skill name="Photography" description="I have been taking photos for almost decade, and I have a lot of skills in this sphere" percentage={34} color="purple" />
    </div>
  );
};