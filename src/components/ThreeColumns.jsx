function ThreeColumns() {
    return (
        <div className="container">
            <section className="three-columns__wrapper">
                <div className="three-columns__first single__column">
                    <h4 className="three-columns__number ">10</h4>
                    <h5 className="three-columns__title">ODDANYCH WORKÓW</h5>
                    <h6 className="three-columns__description">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</h6>
                </div>
                <div className="three-columns__second single__column">
                    <h4 className="three-columns__number">5</h4>
                    <h5 className="three-columns__title">WSPARTYCH ORGANIZACJI</h5>
                    <h6 className="three-columns__description">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</h6>
                </div>
                <div className="three-columns__third single__column">
                    <h4 className="three-columns__number">7</h4>
                    <h5 className="three-columns__title">ZORGANIZOWANYCH ZBIÓREK</h5>
                    <h6 className="three-columns__description">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</h6>
                </div>

            </section>
        </div>
    );
}

export default ThreeColumns;