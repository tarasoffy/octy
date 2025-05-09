import {FlatList} from "react-native";
import {useFavoriteStore} from "../../store/favoriteStore";
import {Target} from "../Target";
import {styles} from "./styles";

export const List = ({data, icon}: any) => {
    const {favorite} = useFavoriteStore()
    return (
        <FlatList
            data={data || []}
            keyExtractor={(target) => target.quote_currency}
            contentContainerStyle={styles.container}
            renderItem={({ item }) => {        
                const {quote_currency, quote} = item;
                const isFavorite = favorite.includes(quote_currency);
                return (
                    <Target 
                        isFavorite={isFavorite} 
                        quote_currency={quote_currency} 
                        quote={quote}
                        icon={icon}
                    />
                );
            }}
        />
    )
}