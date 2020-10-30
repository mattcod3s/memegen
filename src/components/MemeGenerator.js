import React from 'react'

class MemeGenerator extends React.Component {

    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            chosenImage : 'http://i.imgflip.com/1bij.jpg',
            allMemeImages : []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState( {
                allMemeImages : memes
            })
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit() {
        console.log(this.state.allMemeImages)
        let randomNum = Math.floor(Math.random() * 101);
        console.log(randomNum);
        this.setState({
            chosenImage : this.state.allMemeImages[randomNum].url
        })
       
    }

    render() {
        return(
            <div>
                <form className="meme-form">
                    <div className="inputs">
                        <label>Top Text</label>
                        <br></br>
                        <input type="text" onChange={this.handleChange} name="topText"></input>
                        
                        <br></br>
                        <label>Bottom Text</label>
                        <br></br>
                        <input type="text" onChange={this.handleChange} name="bottomText"></input>
                        
                    </div>
                    <div className='button' onClick={this.handleSubmit}>Generate</div>
                </form>
                <div className="meme">
                    <img alt="meme" src={this.state.chosenImage}></img>
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator