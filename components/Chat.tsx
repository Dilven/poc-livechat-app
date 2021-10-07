import { Button, Card, Divider } from "@livechat/design-system";
import { useMutation, useQueryClient } from "react-query";
import { Chat as ChatModel, UserType } from "../models/livechat";
import { Api } from "../services/api";
import { Doughnut } from "react-chartjs-2";

type Props = {
  chat: ChatModel;
};

export const Chat = ({ chat }: Props) => {
  const queryClient = useQueryClient();
  const { mutate: getReport, data: report } = useMutation(Api.getReport, {
    onSuccess: (data) => {
      queryClient.setQueryData("raport", data);
    },
  });
  const data = {
    labels: Object.keys(report || {}),
    datasets: [
      {
        label: "Sentiments",
        data: Object.values(report || {}),
        backgroundColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(11, 145, 235, 0.2)",
          "#0dca1d",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Card
      key={chat.id}
      title={
        chat.users.find((user) => user.type === UserType.agent)?.name ||
        "Unknown"
      }
      img="https://via.placeholder.com/100"
    >
      <div>
        <Divider />
        Users:
        <ul>
          {chat.users
            .filter((user) => user.type !== UserType.agent)
            .map((user) => (
              <li key={user.id}>
                <p>{user.id}</p>
                <br />
                <p>{user.name}</p>
              </li>
            ))}
        </ul>
        <Divider />
        <Button onClick={() => getReport(chat.id)}>Get raport</Button>
      </div>
      {report && (
        <div>
          <p>Report: </p>
          <br />
          <Doughnut data={data} />
        </div>
      )}
    </Card>
  );
};
