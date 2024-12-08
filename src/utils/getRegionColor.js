function getRegionColor(region) {
    switch (region) {
        case 'Mondstadt':
            return 'var(--anemo-color)'

        case 'Liyue':
            return 'var(--geo-color)'

        case 'Inazuma':
            return 'var(--electro-color)'

        case 'Sumeru':
            return 'var(--dendro-color)'

        case 'Fontaine':
            return 'var(--hydro-color)'

        case 'Natlan':
            return 'var(--pyro-color)'

        case 'Snezhnaya':
            return 'var(--cryo-color)'
        default:
            return ''
    }
}

export default getRegionColor