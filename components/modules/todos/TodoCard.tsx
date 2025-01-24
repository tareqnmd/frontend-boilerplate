import { TodoType } from '@/lib/helper/todos/type';

const TodoCard = ({ todo }: { todo: TodoType }) => {
	return (
		<div
			key={todo.id}
			className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 m-2 p-2"
		>
			<h2 className="text-xl font-bold mb-1 truncate">{todo.title}</h2>
			<p className="text-gray-700 text-base">
				{todo.completed ? 'Completed' : 'Not Completed'}
			</p>
		</div>
	);
};

export default TodoCard;
