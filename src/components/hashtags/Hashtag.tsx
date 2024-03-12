type HashtagProps = {
  company: string;
};

const Hashtag = ({ company }: HashtagProps) => {
  return (
    <li>
      <button className="capitalize">#{company}</button>
    </li>
  );
};

export default Hashtag;
