'use client'

import { usePlayer } from '@/contexts/PlayerContext'
import BottomStickyPlayer from './BottomStickyPlayer'

export default function PlayerWrapper() {
  const { isPlayerVisible, hidePlayer, minimizePlayer } = usePlayer()

  return (
    <BottomStickyPlayer
      isVisible={isPlayerVisible}
      onClose={hidePlayer}
      onMinimize={minimizePlayer}
    />
  )
}
