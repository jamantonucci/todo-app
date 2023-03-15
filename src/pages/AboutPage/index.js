import PageContainer from "../../components/PageContainer";

export default function AboutPage() {
  return (
    <PageContainer>
      <h2>About TaskJam</h2>
      <p className='long-p'>
        TaskJam was created by Jamie "Jam" Antonucci, as an ongoing assignment/lab for JavaScript 4 while he was studying at Fanshawe College in London, Ontario. By focusing on one single page application, he was able to see how web applications grow and change during their development. He also added functionality and styling beyond what was required to further challenge his coding skills.
      </p>
      <p className='long-p'>
        <h3>Additional features added by Jam include:</h3>
        <ul>
          <li>The ability to add multiple tasks at once</li>
          <li>Using a checkbox to toggle the status</li>
          <li>Clicking on the task name also toggles the status</li>
          <li>A progress bar showing the percentage of tasks completed</li>
          <li>Buttons to mark all tasks as complete or incomplete</li>
          <li>...and more small improvements!</li>
        </ul>
      </p>
    </PageContainer>
  )
}