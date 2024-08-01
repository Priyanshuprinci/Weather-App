import React, { Component } from 'react';

// function Try() {
//     const [isLoading,setIsLoading]=useState(false);
//     useEffect(()=>{
//         const interval=setTimeout(()=>{
//             setIsLoading(true)
//         },5000)
//         return ()=>clearTimeout(interval)
//     })
//   return (
//     <div>
//       {isLoading?(<button>Click ME</button>):(<p>....Loading</p>)}
//     </div>
//   )
// }

// export default Try


class Try extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    this.interval = setTimeout(() => {
      this.setState({ isLoading: true });
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? <button>Click ME</button> : <p>....Loading</p>}
      </div>
    );
  }
}

export default Try;
