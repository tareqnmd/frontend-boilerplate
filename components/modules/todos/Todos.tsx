import { getTodos } from '@/lib/helper/todos';
import { TODO_URL } from '@/lib/helper/todos/enum';
import { TodoType } from '@/lib/helper/todos/type';
import TodoCard from './TodoCard';

const Todos = async () => {
	const todos = await getTodos(TODO_URL.GET_TODOS);
	return (
		<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{todos.map((todo: TodoType) => (
				<TodoCard
					key={todo.id}
					todo={todo}
				/>
			))}
		</div>
	);
};

export default Todos;
