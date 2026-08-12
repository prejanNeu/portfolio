---
title: "Demystifying Minimax & Game Theory"
description: "How to construct an unbeatable AI opponent for two-player turn-based games using the Minimax search algorithm in Python."
date: "2026-06-20"
readTime: "5 min read"
tags: ["AI", "Python", "Algorithms", "Game Theory"]
---

Building games is one of the best ways to master programming logic. When creating my **Tic Tac Toe AI** project, I wanted to design an opponent that could never be beaten. To achieve this, I turned to the classic search algorithm in game theory: **Minimax**.

In this article, we'll break down the math and logical recursion behind Minimax and look at a clean Python implementation.

## What is Minimax?

Minimax is a backtracking decision rule used in game theory for two-player, turn-based, zero-sum games (where one player's gain is another's loss). The two players are called:

1. **Maximizer (Max)**: Aims to maximize their score (get the highest possible value).
2. **Minimizer (Min)**: Aims to minimize the Maximizer's score (give Max the lowest possible value).

The algorithm works by recursively exploring all possible future moves from the current state down to the end of the game (the terminal nodes).

## Visualizing the Game Tree

Imagine a simple tree of possibilities. Starting from the current turn:

1. Max selects a move that leads to a set of possible responses.
2. Min chooses the best response to minimize Max's outcome.
3. The process repeats down to the final win, loss, or tie.

```
       [ Max Turn ]            (Choose Max of children)
         /      \
      [Min 1]  [Min 2]         (Choose Min of children)
      /   \     /   \
     +1   0    -1   +1         (Terminal outcomes)
```

At the terminal nodes, we evaluate the board state:

- **Win for Max**: +1
- **Loss for Max (Win for Min)**: -1
- **Tie**: 0

The values are then backed up the tree. Max picks the branch with the highest score, while Min picks the branch with the lowest score.

## Python Implementation

Here is a simplified Python structure showing how Minimax handles board searches:

```python
def minimax(self,board):
    if self.terminal(board): # if already is in terminal state
        return
    else:
        if self.player(board) == 1:
            value, move = self.max_value(board) # 
            return move
        elif self.player(board)==-1:
            value, move = self.min_value(board)
            return move
```

### Depth Discounting

Note the expressions `score - depth` and `score + depth` in the base cases. By adjusting the scores based on the `depth` of the search, we encourage the AI to win in fewer turns, or to block the opponent's paths and survive as long as possible if a loss is inevitable.

## Optimization: Alpha-Beta Pruning

For simple games like Tic Tac Toe, evaluating all possible configurations (around $9! = 362,880$ states) is trivial for computers. However, for games like Chess or Go, the tree is too vast.

**Alpha-Beta Pruning** is an optimization that discards branches of the search tree that cannot possibly influence the final decision, saving immense computing time without changing the output.

## Wrapping Up

Implementing Minimax teaches you the core principles of backtracking recursion and search optimization. Once you understand the zero-sum decision framework, you can apply it to build smarter bots for Connect Four, Checkers, and more!
