
function HighlightOld({ setHighlightOld }: { setHighlightOld: (value: boolean) => void }) {
    return (
        <div className="formElem">
            <label htmlFor="highligh">Highlight oldest per city</label>
            <input type="checkbox" id="highligh" name="highligh" onChange={(e) => setHighlightOld(e.target.checked)} />
        </div>
    )
}

export default HighlightOld