import ToolItem from "./ToolItem"

const TOOLS = [
    {id:1, toolName:"AWS Builder"},
    {id:2, toolName:"Start Build"},
    {id:3, toolName:"Build Supplies"},
    {id:1, toolName:"Tooling"},

];

export default function Tools() {
  return (
    <div className="flex sm:justify-start justify-center items-center my-8">
        <p className="text-[#4B5665] lg:text-base text-sm">Tools</p>
      {TOOLS.map((tool) => {
        return (
            <ToolItem key={tool.id} toolName={tool.toolName}></ToolItem>
        )
      })}
    </div>
  )
}
