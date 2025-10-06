'use client'

import { usePlayer } from '@/contexts/PlayerContext'
import BottomStickyPlayer from './BottomStickyPlayer'

export default function PlayerWrapper() {
  const { hidePlayer, minimizePlayer } = usePlayer()

  return (
    <BottomStickyPlayer
      isVisible={true}
      onClose={hidePlayer}
      onMinimize={minimizePlayer}
    />
  )
}
