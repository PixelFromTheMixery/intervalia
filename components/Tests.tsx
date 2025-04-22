import { fetchExample, fetchDatabases, fetchDatabase, fetchTask } from "@scripts/general";

import { useState } from "react";
import { Button, Platform, ScrollView, Text, View } from "react-native";

export function OS_Check() {
	return <Text>This is the {Platform.OS} app!</Text>;
}

export function MakeCall() {
	const [data, setData] = useState<{ title: string } | null>(null);
	const [error, setError] = useState<{ error: string } | null>(null);
	const [loading, setLoading] = useState(false);

	const handlePress = async () => {
		setLoading(true);
		setError(null);
		try {
			const result = await fetchExample();
			setData(result);
		} catch (err) {
			const message = err instanceof Error ? err.message : String(err);
			setError({ error: message });
		} finally {
			setLoading(false);
		}
	};

	return (
		<View>
			<Button
				title={loading ? "Loading..." : "Make Call"}
				onPress={handlePress}
				disabled={loading}
			/>
			<ScrollView>
				{error && <Text style={{ color: "red" }}>{error.error}</Text>}
				{data && <Text>{JSON.stringify(data, null, 2)}</Text>}
			</ScrollView>
			<Button
				title={loading ? "Loading..." : "Fetch Databases"}
				onPress={handlePress}
				disabled={loading}
			/>
			<ScrollView>
				{error && <Text style={{ color: "red" }}>{error.error}</Text>}
				{data && <Text>{JSON.stringify(data, null, 2)}</Text>}
			</ScrollView>
			<Button
				title={loading ? "Loading..." : "Fetch Database"}
				onPress={handlePress}
				disabled={loading}
			/>
			<ScrollView>
				{error && <Text style={{ color: "red" }}>{error.error}</Text>}
				{data && <Text>{JSON.stringify(data, null, 2)}</Text>}
			</ScrollView>
			<Button
				title={loading ? "Loading..." : "Fetch Task"}
				onPress={handlePress}
				disabled={loading}
			/>
			<ScrollView>
				{error && <Text style={{ color: "red" }}>{error.error}</Text>}
				{data && <Text>{JSON.stringify(data, null, 2)}</Text>}
			</ScrollView>
		</View>
	);
}