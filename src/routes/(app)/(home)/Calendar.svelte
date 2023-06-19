<script lang="ts">
  import { onMount } from "svelte";
  import MdIcon from "$lib/components/MdIcon.svelte";
  import { pixels, colors } from "$lib/stores";
  import type { PixelsEntry } from "$lib/types";

  const MONTH_DAY_COUNTS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  function getWeekdayOffset(
    year: number,
    month: number,
    mondayFirst: boolean
  ): number {
    let weekday = new Date(`${year}-${month + 1}`).getDay();
    if (!mondayFirst) weekday += 1;
    if (weekday === 0) return 6;
    else return weekday - 1;
  }

  function getYearAndMonthFromDate(date: string): number[] {
    const [year, month, _] = date.split("-");
    return [+year, +month - 1];
  }

  function getMapOfAllMonthsBetween(
    startYear: number,
    startMonth: number,
    endYear: number,
    endMonth: number
  ): Map<number, number[]> {
    const years = new Map();
    let month = startMonth;
    let year = startYear;
    while (year <= endYear) {
      years.set(year, []);
      const limit = year === endYear ? endMonth : 11;
      while (month <= limit) {
        years.set(year, [...years.get(year), month]);
        month++;
      }
      month = 0;
      year++;
    }

    return years;
  }

  let dates: Map<number, number[]> = new Map();
  let dataSorted: PixelsEntry[] = [];

  if ($pixels.length > 0) {
    dataSorted = $pixels.sort(
      (a: PixelsEntry, b: PixelsEntry) => +new Date(a.date) - +new Date(b.date)
    );
    const [startYear, startMonth] = getYearAndMonthFromDate(dataSorted[0].date);
    const [endYear, endMonth] = getYearAndMonthFromDate(
      dataSorted[dataSorted.length - 1].date
    );
    dates = getMapOfAllMonthsBetween(startYear, startMonth, endYear, endMonth);
  }

  let isMondayFirst = false;

  onMount(() => {
    isMondayFirst =
      !localStorage.getItem("fdotw") ||
      localStorage.getItem("fdotw") === "sunday"
        ? false
        : true;

    for (const entry of dataSorted) {
      const date = entry.date;

      const year = document.querySelector(`#y${date.split("-")[0]}`)!;

      const monthdays = year
        .querySelector(`.m${+date.split("-")[1] - 1}`)!
        .querySelectorAll<HTMLAnchorElement>(".day")!;

      const dateMonthDay = +date.split("-")[2];
      const dayOfEntry = monthdays[dateMonthDay - 1];

      if (entry.notes.length !== 0) {
        dayOfEntry.classList.add("has-notes");
      }

      dayOfEntry.style.background = "none";
      dayOfEntry.style.backgroundColor = $colors[entry.scores[0] - 1];
    }
  });
</script>

{#each [...dates] as [year, months]}
  <div class="year" id={`y${year}`}>
    {#each months as month}
      <div class={`m${month}`}>
        <h2>
          {new Date(1970, month).toLocaleString("default", {
            month: "long",
          })}
        </h2>
        <div class="monthdays">
          {#each { length: getWeekdayOffset(year, month, isMondayFirst) } as _}
            <div />
          {/each}
          {#each { length: MONTH_DAY_COUNTS[month] } as _, day}
            <a href={`/entries/${year}/${month + 1}/${day + 1}`} class="day">
              <span>{day + 1}</span>
              <span class="notes-icon">
                <MdIcon icon="description" color="white" />
              </span>
            </a>
          {/each}
        </div>
      </div>
    {/each}
  </div>
{/each}

<style>
  h2 {
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
  }

  .monthdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.25rem;
    margin-block: 1rem 3rem;
  }

  .day {
    position: relative;
    aspect-ratio: 1;
    background: repeating-linear-gradient(
      -45deg,
      var(--clr-dark-accent),
      var(--clr-dark-accent) 8%,
      transparent 8%,
      transparent 16%
    );
    color: var(--clr-text);
  }

  .day::after {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 200ms;
    background-color: black;
  }

  .day:hover::after {
    opacity: 0.2;
  }

  .day span {
    position: absolute;
    right: 0;
    bottom: 0;
    display: grid;
    place-items: center;
    margin: 0.25em;
    border-radius: 50%;
    width: 1.75em;
    aspect-ratio: 1;
    background-color: var(--clr-bg);
    text-align: center;
    font-size: clamp(9px, 2.5vw, 15px);
  }

  .day > .notes-icon {
    display: none;
  }

  .day.has-notes .notes-icon {
    top: 0;
    display: block;
    background-color: transparent;
  }
</style>
