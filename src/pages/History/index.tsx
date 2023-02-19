import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <div>My historic</div>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Started</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task</td>
              <td>22 minutes</td>
              <td>20 minutes ago</td>
              <td>
                <Status statusColor="green">Running</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>22 minutes</td>
              <td>20 minutes ago</td>
              <td>
                <Status statusColor="yellow">Running</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>22 minutes</td>
              <td>20 minutes ago</td>
              <td>
                <Status statusColor="red">Running</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>22 minutes</td>
              <td>20 minutes ago</td>
              <td>
                <Status statusColor="green">Running</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
