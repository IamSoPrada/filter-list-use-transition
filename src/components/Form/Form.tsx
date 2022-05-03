import React, { useState, useTransition, memo } from "react";
import { useFetch } from "@/hooks/useFetch";
import { routes } from "@/routes";
import { v4 as uuidv4 } from "uuid";
import { useFocus } from "@/hooks/useFocus";
import { PostCard } from "@/components/Card";
import {
  FormContainer,
  Input,
  Button,
  Group,
  Container,
  Title,
} from "@/styles";

type FormProps = {
  children?: React.ReactNode;
};

type InputValue = string;

type Post = {
  id: number;
  body: string;
  name: string;
  userId: number;
};

type PostsProps = {
  posts?: Post[];
  children?: React.ReactNode;
};

const Comments: React.FC<PostsProps> = (props) => {
  const { posts, children } = props;
  return (
    <>
      {children}
      {posts?.map((post) => (
        <Group direction="row" key={uuidv4()}>
          <PostCard key={post.id} text={post.body} userId={post.userId} />
        </Group>
      ))}
    </>
  );
};

const MemoizedComments = memo(Comments);

export const Form: React.FC<FormProps> = () => {
  const initialState = "";
  const [inputValue, setInputValue] = useState<InputValue>(initialState);
  const [comments] = useFetch(routes.getComments());
  const [isPending, startTransition] = useTransition();
  const inputRef = useFocus();

  const onSubmitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (inputRef.current !== null) {
      inputRef.current.value = "";
      setInputValue(initialState);
    }
  };
  const filterOnChange = (arr: Post[]) => {
    return arr.filter((post) => post.name.includes(inputValue));
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    startTransition(() => setInputValue(value));
  };
  return (
    <>
      <FormContainer onSubmit={onSubmitForm}>
        <Group direction="row">
          <Input
            ref={inputRef}
            type="text"
            name="login"
            onChange={handleChange}
            placeholder="Пурум пурум..."
            defaultValue={inputValue}
          />
          <Button primary>сброс</Button>
        </Group>
      </FormContainer>
      {comments.length > 0 ? (
        <Container>
          {isPending && <Title>Loading...</Title>}
          <MemoizedComments posts={filterOnChange(comments)} />
        </Container>
      ) : (
        <Title>Loading...</Title>
      )}
    </>
  );
};
