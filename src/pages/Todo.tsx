import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/lib/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center text-orange-500 font-bold text-3xl my-5">
        My Todos
      </h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
