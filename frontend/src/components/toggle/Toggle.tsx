import './toggle.css'

type Props = {
    currentLanguage: 'js' | 'ts'
    toggleLanguage: () => void
}

export function ToggleBtn({ currentLanguage, toggleLanguage }: Props) {

    return (
        <div className="toggle-container">
            <p className={currentLanguage === 'js' ? 'selected' : ''}>
                JavaScript
            </p>
            <div>
                <input id="checkbox" name="checkbox" type="checkbox"/>
                <label className="label" htmlFor="checkbox"  onClick={() => toggleLanguage()}></label>
            </div>
            <p className={currentLanguage === 'ts' ? 'selected' : ''}>
                TypeScript
            </p>
        </div>
    )
}