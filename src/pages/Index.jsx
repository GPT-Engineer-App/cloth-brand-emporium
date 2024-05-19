import { Container, VStack, HStack, Box, Text, Image, Button, IconButton, Heading, StackDivider } from "@chakra-ui/react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Stylish Jacket",
    price: "$99.99",
    image: "https://images.unsplash.com/photo-1547635289-f3a1a2078969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwamFja2V0fGVufDB8fHx8MTcxNjEyNTUyM3ww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Casual T-Shirt",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1525171254930-643fc658b64e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjB0LXNoaXJ0fGVufDB8fHx8MTcxNjEyNTUyNXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Jeans",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqZWFuc3xlbnwwfHx8fDE3MTYxMjU1MzR8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const ProductCard = ({ product }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="5" width="100%">
    <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />
    <VStack align="start" mt="4">
      <Heading size="md">{product.name}</Heading>
      <Text>{product.price}</Text>
      <HStack spacing="4">
        <Button leftIcon={<FaShoppingCart />} colorScheme="teal">
          Add to Cart
        </Button>
        <IconButton aria-label="Add to Wishlist" icon={<FaHeart />} colorScheme="pink" />
      </HStack>
    </VStack>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" py="10">
      <VStack spacing="8" divider={<StackDivider borderColor="gray.200" />}>
        <Heading as="h1" size="2xl" mb="8">
          Clothing Brand
        </Heading>
        <HStack spacing="8" wrap="wrap" justify="center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
