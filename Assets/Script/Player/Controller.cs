using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class Controller : MonoBehaviour
{
	[SerializeField] private GameObject map;
    [SerializeField] private float rotationSpeed = 100f;
    [SerializeField] private float jumpForce = 5f;
    [SerializeField] private float runningSpeed = 10f;
    [SerializeField] private float walkingSpeed = 5f;
    [SerializeField] private GameObject gameController;
    private Points points;
    private float moveSpeed = 0f;
    private Rigidbody rb;
    private float meterAlreadyTravelt = 0f;
    private float metersTravelt = 0;

	private void Start()
    {
        rb = GetComponent<Rigidbody>();
        points = gameController.GetComponent<Points>();
    }

    private void Update()
    {
        RotateWithMouse();

        if (Input.GetButtonUp("Jump") && isGrounded())
        {
            rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
        }

        bool isGrounded()
        {
            return Physics.Raycast(transform.position, -Vector3.up, 3f);
        }

        metersTravelt = map.transform.position.z - meterAlreadyTravelt;

		if (metersTravelt > 0)
        {
			points.metersTravelt += map.transform.position.z - meterAlreadyTravelt;
		}

		meterAlreadyTravelt = map.transform.position.z;
	}

    private void FixedUpdate()
    {
        float Horizontal = Input.GetAxis("Horizontal");
        float Vertical = Input.GetAxis("Vertical");

        if (Input.GetKey(KeyCode.LeftShift))
        {
            moveSpeed = runningSpeed;
        }

        else
        {
            moveSpeed = walkingSpeed;
        }

        if (Horizontal != 0 && Vertical != 0)
        {
            moveSpeed = moveSpeed / 2;
        }

        Vector3 playerMovement = new Vector3(Horizontal, 0f, 0f).normalized * moveSpeed;
        rb.MovePosition(rb.position + transform.TransformDirection(playerMovement) * Time.fixedDeltaTime);

        Vector3 mapMovement = new Vector3(0f, 0f, Vertical).normalized * moveSpeed;
        map.transform.position += mapMovement * Time.fixedDeltaTime;
    }

    private void RotateWithMouse()
    {
        float mouseX = Input.GetAxis("Mouse X") * rotationSpeed * Time.deltaTime;
        Quaternion deltaRotation = Quaternion.Euler(Vector3.up * mouseX);
        rb.MoveRotation(rb.rotation * deltaRotation);
    }
}

