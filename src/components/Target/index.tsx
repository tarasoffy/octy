import {Text, TouchableOpacity, View} from "react-native"
import {Icon } from "../Icon"
import {useFavoriteStore} from "../../store/favoriteStore"
import {goldColor, redColor} from "../../constants/colors"
import { styles } from "./styles"

export const Target = ({isFavorite, quote_currency, quote, icon}: any) => {
    const {toggleFavorite} = useFavoriteStore()
    return (
        <View style={styles.item}>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.target}>{quote_currency}: </Text>
                <Text style={styles.value}>€{quote.toFixed(2)}</Text>
            </View>
            <TouchableOpacity onPress={() => toggleFavorite(quote_currency)}>
                {icon === 'star' ? 
                    (isFavorite
                        ? <Icon name='starFill' fill={goldColor}/>
                        : <Icon name='star' fill={goldColor}/>)
                    : <Icon name='delete' fill={redColor}/>}
            </TouchableOpacity>
        </View>
    )
}