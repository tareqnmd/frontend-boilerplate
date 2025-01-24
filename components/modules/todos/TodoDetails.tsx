import { TODO_URL } from '@/lib/helper/todos/enum';
import { getTodoById } from '@/lib/helper/todos/service';

const TodoDetails = async ({ todoId }: { todoId: string }) => {
	const todo = await getTodoById(`${TODO_URL.GET_TODOS}/${todoId}`);
	return (
		<div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg">
			<div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
				<span className="text-sm font-medium text-slate-600">
					{todo.completed ? 'Completed' : 'In Progress'}
				</span>
			</div>

			<div className="p-4">
				<h5 className="mb-2 text-slate-800 text-xl font-semibold">
					{todo.title}
				</h5>
				<p className="text-slate-600 leading-normal font-light">{todo.title}</p>
			</div>
			<div className="mx-3 border-t border-slate-200 pb-3 pt-2 px-1">
				<span className="text-sm text-slate-600 font-medium">
					Last updated: 4 hours ago
				</span>
			</div>
		</div>
	);
};

export default TodoDetails;
