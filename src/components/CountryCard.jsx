import React from 'react'

const CountryCard = ({ country }) => {
    return (
        <div className="country_card">
            {/* top */}
            <img
                src={country.flags.png} alt="flag"
                className="flag_image"
            />
            <div className="country_details_container">
                {/* center */}
                <div className="name_currency_container">
                    <p className="name">{country.name}</p>
                    {/* <p className="currency_symbol">{country.currencies.symbol}</p> */}
                </div>
                {/* last */}
                <p className="population">{country.population}</p>
            </div>
        </div>
    )
}

export default CountryCard