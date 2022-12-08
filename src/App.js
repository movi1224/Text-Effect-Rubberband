import RubberBandText from './RubberBandText'
import AnimationWrapper from './JumpInAnimation'
import './styles.css'
export default function App() {
  const letters = 'This is rubber band animation'.split('')
  return (
    <div className="App">
      <h2>1) RubberBandText takes in a letter as child and gives it the animation effect.</h2>
      <h2>
        2) AnimationWrapper takes in letters as prop and work as a wrapper giving the letters
        rubberband effect and jump in animation
      </h2>

      <div>
        <p>Only rubberband effect</p>
        {letters.map((letter, index) => (
          <RubberBandText key={index}>{letter === ' ' ? '\u00A0' : letter}</RubberBandText>
        ))}
      </div>

      <hr />

      <div>
        <p>Effect with jump in animation</p>
        <AnimationWrapper text="This is rubber band animation" />
      </div>
    </div>
  )
}
