const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function test() {
  try {
    const newUser = await prisma.user.create({
      data: {
        email: "testuser@example.com",
        name: "Test User",
        password: "testpassword", // Temporary password for manual testing
        authType: "credentials",
      },
    });

    console.log("✅ User created successfully:", newUser);
  } catch (error) {
    console.error("❌ Error creating user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

test();
