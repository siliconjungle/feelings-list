// Dr. Gloria Willcox's - The Feelings Wheel
export const EMOTIONS = [
  {
    name: 'sad',
    parent: null,
  },
  {
    name: 'disgust',
    parent: null,
  },
  {
    name: 'anger',
    parent: null,
  },
  {
    name: 'fear',
    parent: null,
  },
  {
    name: 'surprise',
    parent: null,
  },
  {
    name: 'happy',
    parent: null,
  },
  {
    name: 'disapproval',
    parent: 'disgust',
  },
  {
    name: 'disappointed',
    parent: 'disgust',
  },
  {
    name: 'awful',
    parent: 'disgust',
  },
  {
    name: 'avoidance',
    parent: 'disgust',
  },
  {
    name: 'guilty',
    parent: 'sad',
  },
  {
    name: 'abandoned',
    parent: 'sad',
  },
  {
    name: 'despair',
    parent: 'sad',
  },
  {
    name: 'depressed',
    parent: 'sad',
  },
  {
    name: 'lonely',
    parent: 'sad',
  },
  {
    name: 'bored',
    parent: 'sad',
  },
  {
    name: 'optimistic',
    parent: 'happy',
  },
  {
    name: 'intimate',
    parent: 'happy',
  },
  {
    name: 'peaceful',
    parent: 'happy',
  },
  {
    name: 'powerful',
    parent: 'happy',
  },
  {
    name: 'accepted',
    parent: 'happy',
  },
  {
    name: 'proud',
    parent: 'happy',
  },
  {
    name: 'interested',
    parent: 'happy',
  },
  {
    name: 'joyful',
    parent: 'happy',
  },
  {
    name: 'excited',
    parent: 'surprise',
  },
  {
    name: 'amazed',
    parent: 'surprise',
  },
  {
    name: 'confused',
    parent: 'surprise',
  },
  {
    name: 'startled',
    parent: 'surprise',
  },
  {
    name: 'scared',
    parent: 'fear',
  },
  {
    name: 'anxious',
    parent: 'fear',
  },
  {
    name: 'insecure',
    parent: 'fear',
  },
  {
    name: 'submissive',
    parent: 'fear',
  },
  {
    name: 'rejected',
    parent: 'fear',
  },
  {
    name: 'humiliated',
    parent: 'fear',
  },
  {
    name: 'hurt',
    parent: 'anger',
  },
  {
    name: 'threatened',
    parent: 'anger',
  },
  {
    name: 'hateful',
    parent: 'anger',
  },
  {
    name: 'mad',
    parent: 'anger',
  },
  {
    name: 'aggressive',
    parent: 'anger',
  },
  {
    name: 'frustrated',
    parent: 'anger',
  },
  {
    name: 'distant',
    parent: 'anger',
  },
  {
    name: 'critical',
    parent: 'anger',
  },
  {
    name: 'judgemental',
    parent: 'disapproval',
  },
  {
    name: 'loathing',
    parent: 'disapproval',
  },
  {
    name: 'repugnant',
    parent: 'disappointed',
  },
  {
    name: 'revolted',
    parent: 'disappointed',
  },
  {
    name: 'revulsion',
    parent: 'awful',
  },
  {
    name: 'detestable',
    parent: 'awful',
  },
  {
    name: 'aversion',
    parent: 'avoidance',
  },
  {
    name: 'hesitant',
    parent: 'avoidance',
  },
  {
    name: 'remorseful',
    parent: 'guilty',
  },
  {
    name: 'ashamed',
    parent: 'guilty',
  },
  {
    name: 'ignored',
    parent: 'abandoned',
  },
  {
    name: 'victimized',
    parent: 'abandoned',
  },
  {
    name: 'powerless',
    parent: 'despair',
  },
  {
    name: 'vulnerable',
    parent: 'despair',
  },
  {
    name: 'empty',
    parent: 'depressed',
  },
  {
    name: 'isolated',
    parent: 'lonely',
  },
  {
    name: 'apatheitc',
    parent: 'bored',
  },
  {
    name: 'indifferent',
    parent: 'bored',
  },
  {
    name: 'inspired',
    parent: 'optimistic',
  },
  {
    name: 'open',
    parent: 'optimistic',
  },
  {
    name: 'playful',
    parent: 'intimate',
  },
  {
    name: 'sensitive',
    parent: 'intimate',
  },
  {
    name: 'hopeful',
    parent: 'peaceful',
  },
  {
    name: 'loving',
    parent: 'peaceful',
  },
  {
    name: 'provocative',
    parent: 'powerful',
  },
  {
    name: 'courageous',
    parent: 'powerful',
  },
  {
    name: 'fulfilled',
    parent: 'accepted',
  },
  {
    name: 'respected',
    parent: 'accepted',
  },
  {
    name: 'confident',
    parent: 'proud',
  },
  {
    name: 'important',
    parent: 'proud',
  },
  {
    name: 'inquisitive',
    parent: 'interested',
  },
  {
    name: 'amused',
    parent: 'interested',
  },
  {
    name: 'ecstatic',
    parent: 'joyful',
  },
  {
    name: 'liberated',
    parent: 'joyful',
  },
  {
    name: 'energetic',
    parent: 'excited',
  },
  {
    name: 'eager',
    parent: 'excited',
  },
  {
    name: 'awe',
    parent: 'amazed',
  },
  {
    name: 'astonished',
    parent: 'amazed',
  },
  {
    name: 'perplexed',
    parent: 'confused',
  },
  {
    name: 'disillusioned',
    parent: 'confused',
  },
  {
    name: 'dismayed',
    parent: 'startled',
  },
  {
    name: 'shocked',
    parent: 'startled',
  },
  {
    name: 'terrified',
    parent: 'scared',
  },
  {
    name: 'frightened',
    parent: 'scared',
  },
  {
    name: 'overwhelmed',
    parent: 'anxious',
  },
  {
    name: 'worried',
    parent: 'anxious',
  },
  {
    name: 'inadequate',
    parent: 'insecure',
  },
  {
    name: 'inferior',
    parent: 'insecure',
  },
  {
    name: 'worthless',
    parent: 'submissive',
  },
  {
    name: 'insignificant',
    parent: 'submissive',
  },
  {
    name: 'alienated',
    parent: 'rejected',
  },
  {
    name: 'disrespected',
    parent: 'humiliated',
  },
  {
    name: 'ridiculed',
    parent: 'humiliated',
  },
  {
    name: 'embarrassed',
    parent: 'hurt',
  },
  {
    name: 'devastated',
    parent: 'hurt',
  },
  {
    name: 'jealous',
    parent: 'threatened',
  },
  {
    name: 'resentful',
    parent: 'hateful',
  },
  {
    name: 'violated',
    parent: 'hateful',
  },
  {
    name: 'furious',
    parent: 'mad',
  },
  {
    name: 'enraged',
    parent: 'mad',
  },
  {
    name: 'provoked',
    parent: 'aggressive',
  },
  {
    name: 'hostile',
    parent: 'aggressive',
  },
  {
    name: 'infuriated',
    parent: 'frustrated',
  },
  {
    name: 'irritated',
    parent: 'frustrated',
  },
  {
    name: 'withdrawn',
    parent: 'distant',
  },
  {
    name: 'suspicous',
    parent: 'distant',
  },
  {
    name: 'skeptical',
    parent: 'critical',
  },
  {
    name: 'sarcastic',
    parent: 'critical',
  },
]
