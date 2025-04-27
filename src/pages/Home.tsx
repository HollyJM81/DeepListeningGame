import { AudioPlayer } from '../components/AudioPlayer';
import { QuestionCard } from '../components/QuestionCard';
import { ProgressTracker } from '../components/ProgressTracker';

export function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Deep Listening Game</h1>
      <ProgressTracker />
      <AudioPlayer />
      <QuestionCard />
    </div>
  );
}
