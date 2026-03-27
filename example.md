---
theme: ./
title: HIRO Lab Presentation Template
themeConfig:
  hiroLabLogo: /assets/hiro-white-text.svg
  hiroCuLogo: /assets/cu-boulder.svg
  hiroCuLogoWhite: /assets/cu-boulder-white.svg
  hiroFooterLogo: /assets/hiro-square.svg
canvasWidth: 1280
highlighter: shiki
---

---
layout: cover
---

# HIRO Lab Presentation Template

Human Interaction and Robotics Group

Your Name

March 2026

---
layout: cover-dark
---

# HIRO Lab Presentation Template

Human Interaction and Robotics Group

Your Name

March 2026

---
layout: section
---

## Introduction

Human Interaction & RObotics Group

---

## Brand Colors & Emphasis

- Use <span class="embodied">embodied green</span> for definitions and key concepts
- Use <span class="social">social pink</span> for warnings and important alerts
- Use <span class="accent">teal accent</span> for links and secondary highlights
- Muted text: <span class="muted">supplementary information and captions</span>

---

Inline highlights: <span class="hl-embodied">embodied</span> <span class="hl-social">social</span> <span class="hl-accent">accent</span>

---

## Mathematics

KaTeX renders math natively — no configuration needed, no Markdown conflicts.

Inline: the policy $\pi_\theta$ is learned online. ZSC treats partners as $\mathbb{E}[\text{human policy}]$.

$$
\mathbf{u}^* = \arg\min_{\mathbf{u}} \int_0^T \ell(\mathbf{x}(t), \mathbf{u}(t))\, dt
$$

Policy gradient update:

$$
\nabla_\theta J(\theta) = \mathbb{E}_{\tau \sim \pi_\theta}\!\left[\sum_{t=0}^{T} \nabla_\theta \log \pi_\theta(a_t | s_t)\, \hat{A}_t\right]
$$

---
layout: two-cols
---

## Two-Column Layout

**Embodied Intelligence**

Physical interaction with the environment through perception, actuation, and learning.

- Manipulation
- Locomotion
- Human-robot collaboration

::right::

**Social Intelligence**

Understanding and generating natural human behaviors in shared environments.

- Intent prediction
- Legible motion planning
- Multi-agent interaction

---
layout: two-cols-header
---

## Two-Column with Header

::left::

### Left Column

Content for the left side.

- Item one
- Item two

::right::

### Right Column

Content for the right side with math $Q_\phi(s, a)$.

- Item three
- Item four

---

## Cards

<div class="columns">
<div class="card-hiro">

### Standard Card

Glassmorphic card with subtle border.

</div>
<div class="card-hiro-gradient">

### Gradient Border Card

Green-to-pink gradient border with glow.

</div>
</div>

<div class="columns-3" style="margin-top: 0.8em;">
<div class="card-hiro"><h4>Success Rate</h4><p class="embodied" style="font-size:1.6em;font-weight:700;">94.2%</p></div>
<div class="card-hiro"><h4>Latency</h4><p class="social" style="font-size:1.6em;font-weight:700;">12 ms</p></div>
<div class="card-hiro"><h4>Speedup</h4><p class="accent" style="font-size:1.6em;font-weight:700;">3×</p></div>
</div>

---

## Admonitions

<div class="admonition admonition-definition">
🧠 <strong>Definition</strong> — Embodied intelligence: learning and acting through physical interaction.
</div>

<div class="admonition admonition-note">
📝 <strong>Note</strong> — Results on real robot. N = 50 trials per condition.
</div>

<div class="admonition admonition-warning">
⚠️ <strong>Warning</strong> — Requires direct torque control. Check hardware limits first.
</div>

<div class="admonition admonition-task">
✍️ <strong>Task</strong> — Implement the safety filter before the next lab meeting.
</div>

---

## Code

Inline: `robot.move_to(goal)`

```python
import numpy as np
from hiro_lab import EmbodiedAgent

class HIRORobot(EmbodiedAgent):
    def act(self, observation: np.ndarray) -> np.ndarray:
        policy_output = self.policy(observation)
        return self.safety_filter(policy_output)
```

---

## Results Table

> "The goal of embodied AI is not to simulate intelligence, but to ground it in the physical world."

| Method | Success Rate | Latency |
|--------|-------------|---------|
| Baseline | 71.2% | 48 ms |
| Ours (w/o social) | 88.4% | 21 ms |
| **Ours (full)** | **<span class="embodied">94.2%</span>** | **<span class="embodied">12 ms</span>** |

---
layout: section
---

## Thank You

hiro-group.github.io
