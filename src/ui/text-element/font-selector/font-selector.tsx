const fontFamilies = [
    { value: 'ancient', label: 'Ancient' },
    { value: 'jersey_m54', label: 'Jersey M54' },
    { value: 'metrim', label: 'Metrim' },
    { value: 'monster_chiller', label: 'Monster Chiller' },
    { value: 'soccer_league', label: 'Soccer League' },
    { value: 'soccer_league_college', label: 'Soccer League College' },
    { value: 'splatink_2', label: 'Splatink 2' },
    { value: 'untinkers', label: 'Untinkers' },
]

interface FontSelectorProps {
    value: string;
    onChange: Function;
}

function FontSelector({ value = 'ancient', onChange }: FontSelectorProps) {

    const onchangeasdf = (e: any) => {
        onChange(e.target.value);
    }

    return (
        <select name="fontFamily" id="font_family_selector" style={{ 'fontFamily': value }} value={value} onChange={onchangeasdf}>
            {fontFamilies.map(font => (
                <option value={font.value} style={{ 'fontFamily': font.value }}>{font.label}</option>
            ))}
        </select>
    );
}

export default FontSelector;