import TodoDetails from '@/components/modules/todos/TodoDetails';

const TodoDetailsPage = ({ params }: { params: { todoId: string } }) => {
	return <TodoDetails todoId={params.todoId} />;
};

export default TodoDetailsPage;
