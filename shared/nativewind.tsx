/*
string order
1. Layout → flex, items-center, justify-between, p-4
2. Box Model → w-full, h-10, m-2, rounded-lg
3. Typography → text-lg, font-semibold, text-gray-100
4. Background / Borders → bg-indigo-600, border, border-gray-700
5. Effects / Transitions → shadow-md, transition, duration-150
6. State Modifiers → hover:bg-indigo-700, active:opacity-75, dark:bg-black
7. Custom Class or Override (optional last)

E.g.:
	Here:
	button: `
		flex items-center justify-center
		w-full h-12 px-4
		text-white text-lg font-bold
		bg-indigo-600 rounded-xl shadow-md
		active:opacity-80 dark:bg-indigo-800
	`
	On comp:
	<Pressable className={styles.button}>
  		<Text>Click me</Text>
	</Pressable>
*/

export const styles = {
	button: "thing"
}