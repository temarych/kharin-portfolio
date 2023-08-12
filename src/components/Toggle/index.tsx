"use client";

import { ToggleOption } from "./ToggleOption";
import { ToggleGroup }  from "./ToggleGroup";

export interface ToggleProps {
  value: string;
}

export const Toggle = {
  Option: ToggleOption,
  Group : ToggleGroup
};