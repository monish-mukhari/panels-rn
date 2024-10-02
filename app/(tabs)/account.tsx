import { useState } from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DownloadPicture } from "@/components/BottomSheet";

export default function account() {
    const [pictureOpen, setPictureOpen] = useState(false);
    return <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
            <Text>Account page</Text>
            <Button title="Open picture" onPress={() => setPictureOpen(true)} />
                {pictureOpen && <DownloadPicture onClose={() => setPictureOpen(false)}/>}
        </View>
    </SafeAreaView>
}