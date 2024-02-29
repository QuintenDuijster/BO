using UnityEngine;

public class Controller : MonoBehaviour
{
    private float speed = 0f;
    private float runSpeed = 10f;
    private float walkSpeed = 5f;
    private float jumpForce = 500f;
    private float RotationSpeed = 10f;
    private Rigidbody rb;
    private float vertical;
    private float horizontal;

    private void Start()
    {
        rb = GetComponent<Rigidbody>();
        Cursor.lockState = CursorLockMode.Locked;
        Cursor.visible = false;
    }

    void Update()
    {
        horizontal = Input.GetAxis("Horizontal");
        vertical = Input.GetAxis("Vertical");

        if (Input.GetKey(KeyCode.LeftShift)) speed = runSpeed;
        else speed = walkSpeed;

        if (Input.GetKey(KeyCode.LeftControl))
        {
            speed = speed / 2;
            transform.localScale = new Vector3(1, 0.75f, 1);
        }
        else
        {
            transform.localScale = new Vector3(1, 1, 1);
        }

        if ((horizontal < -0.2 || horizontal > 0.2) && (vertical < -0.2 || vertical > 0.2))
        {
            speed = speed * 0.5f;
        }

        transform.Translate(new Vector3(horizontal, 0f, vertical) * speed * Time.deltaTime);

        transform.Rotate(0, Input.GetAxis("Mouse X") * RotationSpeed, 0);

        if (Input.GetButtonUp("Jump") && isGrounded())
        {
            rb.AddForce(new Vector3(rb.velocity.x, jumpForce, rb.velocity.z));
        }

        bool isGrounded()
        {
            return Physics.Raycast(transform.position, -Vector3.up, 1.05f);
        }
    }
}
