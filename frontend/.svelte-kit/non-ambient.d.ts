
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/login" | "/profile" | "/register" | "/students" | "/students/new" | "/students/[id]" | "/students/[id]/edit";
		RouteParams(): {
			"/students/[id]": { id: string };
			"/students/[id]/edit": { id: string }
		};
		LayoutParams(): {
			"/": { id?: string | undefined };
			"/login": Record<string, never>;
			"/profile": Record<string, never>;
			"/register": Record<string, never>;
			"/students": { id?: string | undefined };
			"/students/new": Record<string, never>;
			"/students/[id]": { id: string };
			"/students/[id]/edit": { id: string }
		};
		Pathname(): "/" | "/login" | "/profile" | "/register" | "/students" | "/students/new" | `/students/${string}` & {} | `/students/${string}/edit` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): string & {};
	}
}