import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import TodoModal from "./TodoModal";
import { useGetTodosQuery } from "@/redux/api/api";

type TItem = {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: string;
};

const TodoContainer = () => {
  //for local state
  //const { todos } = useAppSelector((state) => state.todos);

  //for server state
  const { data: todos, isLoading } = useGetTodosQuery(undefined);
  console.log(todos);
  if (isLoading) {
    return <p>is loading....</p>;
  }
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
          {todos?.data.map((item: TItem) => (
            <TodoCard key={item._id} {...item}></TodoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
