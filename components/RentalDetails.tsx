

const RentalDetails = () => {
    
    return (
        <div>
            <form>
                <div className="flex">
                    <label>
                        Pick-up & Return location
                        <input className="block">
                        </input>
                    </label>
                    <label>
                        Pick-up date
                        <input className="block">
                        </input>
                    </label>
                    <label>
                        Time
                        <input className="block">
                        </input>
                    </label>
                    <label>
                        Drop-off date
                        <input className="block">
                        </input>
                    </label>
                    <label>
                        Time
                        <input className="block">
                        </input>
                    </label>
                </div>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default RentalDetails