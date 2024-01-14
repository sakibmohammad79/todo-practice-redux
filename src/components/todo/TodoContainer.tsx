import { useAppSelector } from "@/redux/hook";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import TodoModal from "./TodoModal";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between items-center my-3">
        <TodoModal></TodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[4px] ">
        {/* default components
        <div className="p-3 text-2xl rounded-lg font-semibold flex justify-center items-center bg-white">
          <p>There is no task pending...</p>
        </div> */}
        <div className="w-full h-full bg-white p-5 rounded-md space-y-3">
          {todos.map((item) => (
            <TodoCard {...item}></TodoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
